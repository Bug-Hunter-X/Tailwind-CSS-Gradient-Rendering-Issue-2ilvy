```javascript
// Ensure your tailwind.config.js includes gradients (if using a custom config)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//Correct class names and remove any conflicting styles
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Content -->
</div>
```