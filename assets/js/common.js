$(document).ready(function () {
  const $pubEntry = (el) => $(el).closest(".row");

  const updatePubDropdownActiveState = ($entry) => {
    $entry.find(".pub-links-dropdown .dropdown-item").each(function () {
      const $item = $(this);
      let sectionSelector = null;
      if ($item.hasClass("abstract")) sectionSelector = ".abstract.hidden";
      else if ($item.hasClass("award")) sectionSelector = ".award.hidden";
      else if ($item.hasClass("bibtex")) sectionSelector = ".bibtex.hidden";

      if (sectionSelector && $entry.find(sectionSelector).first().hasClass("open")) {
        $item.addClass("active");
      } else {
        $item.removeClass("active");
      }
    });
  };

  const openPubSection = ($entry, sectionClass) => {
    $entry.find(".abstract.hidden, .award.hidden, .bibtex.hidden").removeClass("open");
    $entry.find(`.${sectionClass}.hidden`).addClass("open");
    updatePubDropdownActiveState($entry);
  };

  const collapsePubSections = ($entry) => {
    $entry.find(".abstract.hidden, .award.hidden, .bibtex.hidden").removeClass("open");
    updatePubDropdownActiveState($entry);
  };

  // Collapse expanded sections when clicking the More button again
  $(".pub-more-btn").click(function (e) {
    const $entry = $pubEntry(this);
    const hasOpen = $entry.find(".abstract.hidden.open, .award.hidden.open, .bibtex.hidden.open").length > 0;
    if (hasOpen) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      collapsePubSections($entry);
      const $dropdown = $(this).closest(".dropdown");
      $dropdown.removeClass("show");
      $(this).attr("aria-expanded", "false");
      $dropdown.find(".dropdown-menu").removeClass("show");
    }
  });

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function (e) {
    e.preventDefault();
    openPubSection($pubEntry(this), "abstract");
  });
  $("a.award").click(function (e) {
    e.preventDefault();
    openPubSection($pubEntry(this), "award");
  });
  $("a.bibtex").click(function (e) {
    e.preventDefault();
    openPubSection($pubEntry(this), "bibtex");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
