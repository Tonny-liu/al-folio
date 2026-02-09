require 'json'

module Jekyll
  class CoauthorCountsTag < Liquid::Tag
    Cache = {}

    def render(context)
      site = context.registers[:site]
      return({}.to_json) unless site

      scholar_cfg = site.config['scholar'] || {}
      source_dir = (scholar_cfg['source'] || '/_bibliography/').to_s
      bib_file = (scholar_cfg['bibliography'] || 'papers.bib').to_s

      source_dir = source_dir.sub(%r{^/}, '')
      bib_path = File.join(site.source, source_dir, bib_file)

      self_last_names  = Array(scholar_cfg['last_name']).map  { |s| normalize_name_part(s) }
      self_first_names = Array(scholar_cfg['first_name']).map { |s| normalize_name_part(s) }

      cache_key = [bib_path, self_last_names.sort, self_first_names.sort].hash
      if Cache.key?(cache_key)
        return Cache[cache_key]
      end

      counts = {}

      begin
        raw = File.read(bib_path)
      rescue Exception => e
        puts "coauthor-counts.rb: error reading #{bib_path}: #{e.class} - #{e.message}"
        return({}.to_json)
      end

      # Strip optional YAML front matter at the top of the file (--- ... ---)
      if raw.lstrip.start_with?('---')
        raw = raw.sub(/\A---.*?---\s*/m, '')
      end

      # Scan each author={...} block; treat each as one paper
      raw.scan(/author\s*=\s*\{([^}]*)\}/mi) do |match|
        author_block = match.first.to_s
        names = author_block.split(/\band\b/i).map { |n| n.strip }.reject(&:empty?)
        parsed = names.map { |n| split_name(n) }

        # Check if this paper includes self
        self_present = parsed.any? do |n|
          last  = normalize_name_part(n[:last])
          first = normalize_name_part(n[:first])
          self_last_names.any?  { |ln| !ln.empty? && last == ln } &&
            self_first_names.any? { |fn| !fn.empty? && first.start_with?(fn) }
        end

        next unless self_present

        # Collect unique coauthors within this paper
        coauthors_in_paper = {}
        parsed.each do |n|
          last_norm  = normalize_name_part(n[:last])
          first_norm = normalize_name_part(n[:first])

          next if last_norm.empty?
          next if last_norm == 'others'

          is_self = self_last_names.any?  { |ln| !ln.empty? && last_norm == ln } &&
                    self_first_names.any? { |fn| !fn.empty? && first_norm.start_with?(fn) }
          next if is_self

          display = display_name(n[:first], n[:last])
          next if display.empty?

          coauthors_in_paper[display] = true
        end

        coauthors_in_paper.keys.each do |name|
          counts[name] = (counts[name] || 0) + 1
        end
      end

      json = counts.to_json
      Cache[cache_key] = json
      json
    end

    private

    # Very lightweight BibTeX name splitter:
    # - "Last, First"  -> { first: First, last: Last }
    # - "First Last"   -> { first: First, last: Last }
    def split_name(raw)
      s = raw.to_s.strip
      s = s.gsub(/[{}]/, '')

      if s.include?(',')
        last, first = s.split(',', 2)
        {
          first: first.to_s.strip,
          last:  last.to_s.strip
        }
      else
        parts = s.split(/\s+/)
        return { first: '', last: '' } if parts.empty?

        last  = parts.pop
        first = parts.join(' ')
        {
          first: first.strip,
          last:  last.strip
        }
      end
    end

    # Lowercase, remove accents/punctuation-ish markers, keep letters/spaces/hyphens/apostrophes.
    def normalize_name_part(value)
      value.to_s
           .gsub(/[*∗†‡§¶‖&^#]/, '')
           .gsub(/[^[:alpha:]\-'\s]/, '')
           .strip
           .downcase
    end

    def display_name(first, last)
      f = first.to_s.gsub(/[*∗†‡§¶‖&^#]/, '').strip
      l = last.to_s.gsub(/[*∗†‡§¶‖&^#]/, '').strip
      name = [f, l].reject(&:empty?).join(' ')
      name.gsub(/\s+/, ' ').strip
    end
  end
end

Liquid::Template.register_tag('coauthor_counts', Jekyll::CoauthorCountsTag)

