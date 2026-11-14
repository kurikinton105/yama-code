# yama-code (yama-code)

yama's page

yamaの活動ををまとめたサイト https://yama-code.web.app/ のリポジトリのフロント部分です

## using Technology

- Quasar.js (Vue.js framework)
- Firebase hosting

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Deployment identity and indexing

This legacy Quasar repository deploys to Firebase Hosting site `yama-code`
(`https://yama-code.web.app/`), with a separate Netlify deployment/preview.
The current `https://yama-code.dev/` site is maintained by `yama-code-nextjs`.
Changing this repository does not update that Next.js site.

Metadata and sitemap URLs here identify the Firebase host. The legacy site's
existing robots restrictions are retained; the HTML is explicitly `noindex`
to avoid publishing a second indexable portfolio without a deliberate migration.
Do not remove this restriction merely to raise an automated SEO/agent-readiness score.
