# React Initial setting

## 목차

1. [CRA with typescript](#1-cra-with-typescript)

2. [Set absolute path](#2-set-absolute-path)

3. [Set prettier & eslint](#3-set-prettier--eslint)

   3.1. [Eslint](#31-eslint)

   3.2. [Prettier](#32-prettier)

   3.3. [Prettier 와 ESLint 함께 사용](#33-prettier-eslint-함께-사용)

   3.4. [Running ESLint & Prettier](#34-running-eslint-prettier)

4. [필요한 라이브러리 설치](#4-필요한-라이브러리-설치)

   4.1. [](#)

---

## 1. CRA with typescript

```bash
npx create-react-app [프로젝트명] --template typescript
```

<br />

## 2. Set Absolute path

CRA를 통한 프로젝트는 webpack에 alias 설정을 통해 절대경로를 설정할 수 있지만, `eject`를 해야하는 위험이 있습니다.

```bash
npm install --save-dev customize-cra react-app-rewired
```

패키지 설치 후, package.json의 script를 수정해줘야 한다.

```json
// package.json

{
  ...
  "scripts": {
    ...,
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject",
    ...,
  }
}
```

root 경로에 `config-overrides.js`를 만들어 웹팩을 overriding을 할 수 있습니다.

```javascript
// config-overrides.js

const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
)
```

TypeScript를 사용하고 있기에 `tsconfig.paths.json`파일을 만들어 path를 설정해줘야 합니다.

```json
// tsconfig.paths.json

{
  // 예시 1
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }

  // 예시 2
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@layout/*": ["src/layout/*"],
      "@libs/*": ["src/libs/*"],
      "@functions/*": ["src/functions/*"],
      "@services/*": ["src/services/*"],
      "@pages/*": ["src/pages/*"],
      "@types/*": ["src/types/*"],
      "@utils/*": ["src/utils/*"]
    },
  }
}
```

마지막으로 `tsconfig.json`에서 `tsconfig.paths.json`의 내용이 적용될 수 있게 추가 설정을 해줍니다.

```json
// tsconfig.json

{
  ...
  "extends": "./tsconfig.paths.json"
}
```

<br />

## 3. Set Prettier & ESLint

### 3.1. ESLint

#### 3.1.1. Defualt config 지우기 (package.json)

```json
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
},
```

#### 3.1.2. Install eslint

```bash
npm install eslint --save-dev
```

<br />

#### 3.1.3. Setup ESLint

해당 명령어에 따라 eslint를 설정하면 됩니다.

```bash
npx eslint --init
```

![eslint-setting-image](https://user-images.githubusercontent.com/37237125/173259212-0709f23f-7c86-4343-9753-fa8172fab194.png)

#### 3.1.4. Install Plugin

Typescript와 관련된 플러그인을 설치해야 합니다.

```
npm install --save-dev @typescript-eslint/parser eslint-import-resolver-typescript
```

설치가 완료되면 아래와 같이 자동으로 세팅됩니다.

```json
/* eslintrc.json */
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

<br />

### 3.2. Prettier

```bash
npm install --save-dev --save-exact prettier eslint-config-prettier eslint-plugin-prettier
```

```bash
touch .prettierrc
```

문서를 보고 각자에 맞는 원하는 option을 추가하시면 됩니다 (https://prettier.io/docs/en/options.html)

아래 option은 제가 자주 사용하는 셋팅값입니다.

```json
// .prettierrc

{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

<br />


### 3.3. Prettier, ESLint 함께 사용

ESLint와 함께 Prettier를 사용하려면 `extends`에 prettier를 추가해야합니다.

```json
/* .eslintrc.json */

{
  ...
  "extends": [
    ...
    "prettier"
  ]
}
```

<br />

프로젝트에서 `Jest`를 사용한다면 `env` 에 다음 코드를 추가해주세요

```json
/* .eslintrc.json */

{
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true // Add this line!
  },
  ...
}
```

<br />

기본적으로 제가 사용하는 기본 eslint rules 입니다.

```json
/* .eslintrc.json */

{
  ...
  "rules": {
    "react/react-in-jsx-scope": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

`.eslintignore` 파일을 만들어 eslint가 적용되지 않아야 하는 파일을 추가해줍니다.

```
src/react-app-env.d.ts
src/serviceWorker.ts
node_modules
dist
```

우리가 설치한 Plugin을 사용하려면 `plugins`을 업데이트 해줘야 합니다.

```json
"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"]
```

마지막으로 ESLint에서 설정해줘야하는 것이 `eslint-import-resolver-typescript`입니다.

```json
/* .eslintrc.json */

{
  ...
  "settings": {
    "impoty/resolver": {
      "typescript": {}
    }
  }
}
```

마지막으로 package.json의 `scripts`를 추가하면 됩니다.

```json
/* package.json */

{
  ...
  "script": {
    ...
    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx,json}'",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
    "prettier": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  }
}
```

### 3.4. Running ESLint, Prettier

```bash
npm run lint

npm run lint:fix
```

에러가 줄줄 나타날 수도 있습니다. ㅎㅎ;
<br />

1. Warning: React version not specified in eslint-plugin-react settings.

```json
// .eslintrc.json

{
  ...
  "settings": {
    ...
    "react": {
      "version": "detect"
    }
  }
}
```

<br />

## 4. Hursky, Lint-staged

ESLint를 프로젝트에 적용시킬 때는 협업하는 모든 사람들이 같은 규칙 내에서 코딩을 하는데 매번 명령어를 입력해서 Lint를 사용하는 부분이 불편할 수 있기에 git hook 제어를 위한 `hursky` 와 커밋 상태를 알 수 있는 `lint-staged`를 사용해서 `git commit` 명령어를 사용했을 때 실행 될 수 있게 하려고 합니다.

`lint-staged`를 사용하는 이유는 매번 모든 파일에 대해서 pretter와 lint를 적용하기에는 프로젝트의 규모가 클수록 리소스가 많이 드므로
staged 된 상태의 파일만 적용할 수 있게 하려고 사용합니다.

### 4.1. 설치

mrm을 이용하면 lint-staged와 husky를 간편하게 설정해줄 수 있다. 👍

```bash
npx mrm@2 lint-staged
```

위 명령어를 실행하면 .husky폴더가 생기고 package.json 파일에 다음과 같은 코드가 추가로 생깁니다.

```json
{
  ...
  "scripts": {
    "prepare": "husky install"
  },
  "devDependencies": {
    "husky": "^6.0.0",
    "lint-staged": "^11.0.0",
  },
  "lint-staged": {
    "*.js": "eslint --cache --fix"
  }
  ...
}
```

### 4.2. hursky 설정

mrm이 기본적으로 `hursky` 설정을 해주기에 따로 설정해줘야 하는 부분은 없습니다.
기본적으로 `pre-commit` 내용을 살펴보면

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

```

git commit을 하기전에 npx lint-staged 명령어가 실행되게 됩니다.

### 4.3. lint-staged 설정하기

`lint-staged`는 따로 설정이 필요합니다.

일단 `prettier`와 `eslint`를 사용하는 파일 확장자명을 다르게 나누었습니다.

```json
// package.json

{
  ...
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,css,md,json}": [
      "prettier --write --config ./.prettierrc"
    ],
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "eslint --max-warnings 0"
    ]
  }

}
```

`--max-wrainings 0` 은 lint 사용했을 때 warning 경고까지 잡는(?) 옵션입니다.

<br />
