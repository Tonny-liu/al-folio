#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Use the already installed Ruby on this Mac, without changing shell settings.
if [[ -x "$HOME/.rubies/ruby-3.4.1/bin/ruby" ]]; then
  export PATH="$HOME/.rubies/ruby-3.4.1/bin:$HOME/miniconda3/bin:/opt/homebrew/bin:$PATH"
  export GEM_HOME="$HOME/.gem/ruby/3.4.1"
  export GEM_PATH="$GEM_HOME:$HOME/.rubies/ruby-3.4.1/lib/ruby/gems/3.4.0"
fi
export JUPYTER_CONFIG_DIR="$PWD/.jekyll-cache/jupyter"
export IPYTHONDIR="$PWD/.jekyll-cache/ipython"

if [[ ! -d node_modules/esbuild ]]; then
  printf 'Install JavaScript dependencies first: npm ci\n' >&2
  exit 1
fi
npm run build:resources
printf '\nResources preview: http://127.0.0.1:4173/resources/\n\n'
bundle exec jekyll serve --config _config.yml,_config.resources-local.yml --host 127.0.0.1 --port 4173 --livereload
