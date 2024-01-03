const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));

app.get('*', async (req, res) => {
    const _path = req.path;
    // l/*path の形式でpathを取得
    const path = _path.replace('/l','');
    const defaultTitle = "yama-code";
    const defaultDescription = "This is yama's page";
    console.log(path);
    // botの判定
    const userAgent = req.headers['user-agent'].toLowerCase()
    const isBot = userAgent.includes('googlebot') ||
      userAgent.includes('yahoou') ||
      userAgent.includes('bingbot') ||
      userAgent.includes('baiduspider') ||
      userAgent.includes('yandex') ||
      userAgent.includes('yeti') ||
      userAgent.includes('yodaobot') ||
      userAgent.includes('gigabot') ||
      userAgent.includes('ia_archiver') ||
      userAgent.includes('facebookexternalhit') ||
      userAgent.includes('twitterbot') ||
      userAgent.includes('developers.google.com') ? true : false

    try {
        const doc = await db.collection('Link').doc(path).get();
        let title = doc.data().title;
        if (title == undefined){ title = defaultTitle}
        let description = doc.data().description
        if (description == undefined){ description = defaultDescription};
        let linkUrl = doc.data().url
        if (linkUrl == undefined){ linkUrl = 'https://yama-code.dev'};
        console.log(doc.data());
        let ogpUrl = doc.data().ogpUrl
        if (ogpUrl == undefined) { ogpUrl = 'https://yama-code.web.app/yama-icon.jpg' };

        console.log(title);
        console.log(description);
        const redirectUrl = 'https://yama-code.dev'+ path;
        if (isBot) {
        // Botならリダイレクトしない, Botじゃなければリダイレクト
          let html = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta property="title" content="${title}" />
              <meta
                property="description"
                content="${description}" />
              <meta name="format-detection" content="telephone=no">
              <meta name="msapplication-tap-highlight" content="no">
              <meta name="viewport" content="width=device-width,initial-scale=1">
              <!-- OGP -->
              <meta property="og:title" content="${title}" />
              <meta
                property="og:description"
                content="${description}" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="${linkUrl}" />
              <meta
                property="og:image"
                content="${ogpUrl}"
              />
              <link rel="icon" type="image/jpg" sizes="128x128" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="96x96" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="32x32" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="16x16" src="${ogpUrl}">
              <link rel="icon" type="image/ico" href="${ogpUrl}">
            </head>
            <body>
              <header>${title}</header>
              <main>${description}</main>
              <a href="${redirectUrl}">${redirectUrl}へリダイレクト</a>
            </body>
            </html>
        `;
        } else {
          html = `<!doctype html>
            <head>
              <meta property="title" content="${title}" />
              <meta
                property="description"
                content="${description}" />
              <meta name="format-detection" content="telephone=no">
              <meta name="msapplication-tap-highlight" content="no">
              <meta name="viewport" content="width=device-width,initial-scale=1">
              <meta property="og:title" content="${title}" />
              <meta
                property="og:description"
                content="${description}" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="${linkUrl}" />
              <meta
                property="og:image"
                content="${ogpUrl}"
              />
              <link rel="icon" type="image/jpg" sizes="128x128" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="96x96" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="32x32" src="${ogpUrl}">
              <link rel="icon" type="image/jpg" sizes="16x16" src="${ogpUrl}">
              <link rel="icon" type="image/ico" href="${ogpUrl}">
            </head>
            <body>
              <div style="text-align: center;">
              <header>${title}</header>
              <main>${description}</main>
              <script type="text/javascript">window.location = "${redirectUrl}";</script>
              <a href="${redirectUrl}">${redirectUrl}へリダイレクト</a>
              </div>
            </body>
          </html>`
      }
        res.set('Cache-Control', 'public, max-age=600, s-maxage=600')
        res.status(200).send(html);

      } catch (error) {
        html = `<!doctype html>
        <body>
          <div style="text-align: center;">
          <a href="https://yama-code.dev">エラーが発生したため、https://yama-code.devへリダイレクトしました。</a>
          Error Log<br/>
          ${error}
          </div>
        </body>
      </html>`
        console.error('Error fetching document:', error);
        res.status(500).send(html);
      }
});

exports.app = functions.https.onRequest(app);
