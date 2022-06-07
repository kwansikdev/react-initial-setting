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

<br />

## 1. CRA with typescript

```
npx react-create-app [프로젝트명] --template typescript
```

## 2. Set absolute path

```
// tsconfig.json

{
  ...,
  // 예시
  "baseUrl": ".",
  "paths": {
    "@components/*": ["src/components/*"],
    "@hooks/*": ["src/hooks/*"],
    "@layouts/*": ["src/layouts/*"],
    "@libs/*": ["src/libs/*"],
    "@services/*": ["src/services/*"],
    "@pages/*": ["src/pages/*"],
    "@typings/*": ["src/typings/*"],
    "@utils/*": ["src/utils/*"]
  },
}
```

## 3. Set Prettier & ESLint

### 3.1. ESLint

#### 3.1.1. Defualt config 지우기 (package.json)

```
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
},
```

#### 3.1.2. Install eslint

```
npm install eslint --save-dev
```

<br />

#### 3.1.3. Setup ESLint

해당 명령어에 따라 eslint를 설정하면 됩니다.

```
npx eslint --init
```

#### 3.1.4. Install Plugin

Typescript와 관련된 플러그인을 설치해야 합니다.

```
npm install --save-dev @typescript-eslint/parser eslint-import-resolver-typescript
```

설치가 완료되면 아래와 같이 자동으로 세팅됩니다.

```
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
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

<br />

### 3.2. Prettier

```
npm install --save-dev --save-exact prettier eslint-config-prettier eslint-plugin-prettier
```

```
touch .prettierrc
```

문서를 보고 각자에 맞는 원하는 option을 추가하시면 됩니다 (https://prettier.io/docs/en/options.html)

아래 option은 제가 자주 사용하는 셋팅값입니다.

```
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

프로젝트에서 `Jest`를 사용한다면 `env` 에 다음 코드를 추가해주세요

```
{
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true // Add this line!
  },
  ...
}
```

### 3.3. Prettier, ESLint 함께 사용

ESLint와 함께 Prettier를 사용하려면 `extends`에 prettier를 추가해야합니다.

```
{
  ...
  "extends": [
    ...
    "prettier"
  ]
}
```

기본적으로 제가 사용하는 기본 eslint rules 입니다.

```
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

우리가 설치한 Plugin을 사용하려면 `plugins`을 업데이트 해줘야 합니다.

```
"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"]
```

마지막으로 ESLint에서 설정해줘야하는 것이 `eslint-import-resolver-typescript`입니다.

```
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

```
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

```
npx eslint src/* --fix

npm run lint

npm run lint:fix
```

에러가 줄줄 나타날 수도 있습니다. ㅎㅎ;
<br />

1. Warning: React version not specified in eslint-plugin-react settings.

```
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

## 4. 필요한 라이브러리 설치

1.  react-router-dom

    - router 기능을 사용하기 위해서 필요한 라이브러리

    ```
    npm install react-router-dom
    ```

    <br />

2.  axios

    ```
    npm install axios
    ```

    <br />

3.  Emotion

    - css in js 스타일 라이브러리

    ```
    npm install @emotion/react
    npm install @emotion/styled
    ```

      <br />

4.  Storybook

    - An open source tool for building UI components and pages in isolation

    ```
    npx -p @storybook/cli sb init
    ```

    ```
    // package.json 안에 추가

    "scripts": {
      "storybook": "start-storybook -p 6006 -s public",
      "build-storybook": "build-storybook -s public"
    },
    ```

    - addon 추가 및 설정

           ```

           ```

      <br />

5.  상태관리

    - redux-toolkit
    - redux-saga
    - typesafe-actions
    - redux-first-history
      <br />

    ```
    npm install @reduxjs/toolkit
    npm install redux-saga typesafe-actions redux-first-history
    ```

---

- dayjs
  - 날짜 관련 라이브러리
-
