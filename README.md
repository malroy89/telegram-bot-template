# Telegram Bot Template

A TypeScript-based Telegram bot template with built-in internationalization (i18n) support and MongoDB integration.

## Features

- 🚀 TypeScript support
- 🌍 Internationalization (i18n) with multiple language support
- 💾 MongoDB integration for data persistence
- 🔧 Middleware support
- 📱 Menu-based interactions
- 🔐 Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance
- Telegram Bot Token (get it from [@BotFather](https://t.me/botfather))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/telegram-bot-template.git
cd telegram-bot-template
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```env
TOKEN=your_telegram_bot_token
MONGO=your_mongodb_connection_url
```

## Development

Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── commands/         # Bot command handlers
├── helpers/         # Utility functions and helpers
├── menus/          # Menu definitions
├── middlewares/    # Custom middlewares
├── models/         # TypeScript interfaces and types
└── app.ts          # Main application entry point
```

## Environment Variables

Create `.env` with the following environment variables:

- `TOKEN` — Telegram bot token
- `MONGO` — URL of the mongo database

Consider looking at `.env.sample` for reference.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.