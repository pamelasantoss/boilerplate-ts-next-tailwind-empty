import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin"
import eslintPluginImportHelpers from "eslint-plugin-import-helpers"
import eslintPluginPrettier from "eslint-plugin-prettier"
import eslintPluginTailwind from "eslint-plugin-tailwindcss"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts"
    ]
  },
  {
    plugins: {
      "import-helpers": eslintPluginImportHelpers,
      "@typescript-eslint": eslintPluginTypescript,
      "prettier": eslintPluginPrettier,
      "tailwindcss": eslintPluginTailwind
    },
    rules: {
      "no-console": ["error"],
      "no-unused-vars": "error",
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "never",
          groups: [
            ["/^next/", "/^react$/"],
            "module",
            "/^@//",
            ["parent", "sibling", "index"]
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true
          }
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "prettier/prettier": ["error"],
      "tailwindcss/classnames-order": "warn"
    }
  }
]

export default eslintConfig
