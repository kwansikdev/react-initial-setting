# React Initial setting

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

## 3. Set prettier & eslint

- root 위치에 `.prettier`, `.eslintrc.js` 파일 추가

```
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all"
}

```

```
// .eslintrc.js 파일을 루트폴더에서 직접 확인바람.
```

## 4. 필요한 라이브러리 설치

- react-router-dom

  - d

  ```
  npm install react-router-dom
  ```

- axios
- emotion
  - CSS in JS 스타일 라이브러리
  ```
  npm install @emotion/react
  npm install @emotion/styled
  ```
- Storybook

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

- 상태관리

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
  -- 날짜 관련 라이브러리
-
