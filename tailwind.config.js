/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        auto: "auto",
        "16px": "16px",
        "31px": "31px",
        "42px": "42px",
        "54px": "54px",
        "62px": "62px",
        "70px": "70px",
        "78px": "78px",
        "112px": "112px",
        "128px": "128px",
        "177px": "177px",
        "225px": "225px",
        "275px": "275px",
        "300px": "300px",
        "330px": "330px",
      },
      lineHeight: {
        sm: "1.625rem",
        11: "2.625rem",
        12: "2.75rem",
        13: "3.375rem",
        14: "3.875rem",
        15: "4.375rem",
      },
    },
  },
  plugins: [],
};
