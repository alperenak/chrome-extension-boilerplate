# Chrome Extension Project using Vite and pnpm

This project is a Chrome extension built using Vite and crx-vite plugin. It uses pnpm as the package manager.

## Getting Started

### Prerequisites

Before you start, ensure you have the following tools installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alperenak/chrome-extension-boilerplate.git
   cd chrome-extension-boilerplate
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

### Development

To run the project in development mode, use the following command:

```bash
pnpm run dev
```

This will build and serve the project, which is then ready to be loaded into Chrome as an unpacked extension.

### Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the `dist` folder in the project directory.

The extension should now be running in development mode.

### Building for Production

To build the extension for production, run:

```bash
pnpm run build
```

This will generate the final extension files in the `dist` folder, which can be uploaded to the Chrome Web Store or installed manually.

### License

This project is licensed under the MIT License.
