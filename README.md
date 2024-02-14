# web-ui-libraries-eval

Evaluating various web UI libraries to use in future projects

## IBM Carbon with Remix.run

Path of repo: [IBM Carbon with Remix](with-remix/ibm-carbon/README.md)

- Bit of pain to setup for Remix & Vite.
- Mainly due to dependency on scss, loading of asset (fonts) getting 404 during development and production deployment.
- Have unoptimized bulk chunks (upto 3MB in size) loading at the start of website so far.
- It is able to work though!
