(() => {
  if (document && document.querySelector && window.fetch) {
      var widgetDiv = document.querySelector("div[data-use-for='hoa-widget']");
      if (widgetDiv) {
          var hoaId = widgetDiv.getAttribute('data-hoa-id');
          if (hoaId) {
              fetch(`https://www.oaintel.com/_functions/hoascore?hoa-id=${hoaId}`, {method: 'GET', mode: 'cors', cache: 'no-cache', credentials: 'omit', headers: {'Content-Type': 'application/json'}, redirect: 'follow'})
                .then((response) => {
                    console.log(JSON.stringify(response))
                    return response.json()
                })
                .then((data) => {
                    console.log(JSON.stringify(data))
                    if (data && data.score && Number.isNumber(data.score)) {
                      var content = '<div style="display: inline-block;font-family: Roboto; border: 1px solid darkorange;padding: 2px 4px;margin: 2px;width: 50px;text-align: center;">' +
                                      `<div style="font-size: 10px;font-weight: bold;margin-bottom: 3px;">HOA Score</div><div style="font-size: 28px;color: orange;font-weight: bold;margin-bottom: 3px;">${data.hoaScore}</div>` +
                                      '<div style="font-size: 8px;">powered by hoa-score.com</div></div>'

                      widgetDiv.innerHTML = content
                    }
                });
              }
      }
  } else {
      console.error('Unsupported browser version')
  }
})()