(() => {
    console.log("[Bootstrap Extractor] content.js gestartet");

    const links = Array.from(document.querySelectorAll("link[rel='stylesheet']"));
    const bootstrapCdnRegex = /bootstrap.*\.css/;

    const bootstrapLink = links.find(link => bootstrapCdnRegex.test(link.href));

    if (bootstrapLink) {
        console.log(`[Bootstrap Extractor] Bootstrap-Stylesheet gefunden: ${bootstrapLink.href}`);

        fetch(bootstrapLink.href)
            .then(response => response.text())
            .then(cssContent => {
                const blob = new Blob([cssContent], { type: "text/css" });
                const url = URL.createObjectURL(blob);
                const filename = `bootstrap-${Date.now()}.css`;

                chrome.runtime.sendMessage(
                    { action: "download-css", url, filename },
                    (response) => {
                        console.log("[Bootstrap Extractor] Download Response:", response);
                    }
                );
            })
            .catch(err => console.error("[Bootstrap Extractor] Fehler beim Laden des Stylesheets:", err));
    } else {
        console.warn("[Bootstrap Extractor] Kein Bootstrap-CSS gefunden.");
    }
})();  