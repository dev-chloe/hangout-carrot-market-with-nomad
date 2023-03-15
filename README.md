# hangout-carrot-market-with-nomad

[캐럿마켓 클론코딩](https://nomadcoders.co/carrot-market/)을 따라한 과정

## Quick start

### Run your applciation

```bash
# At the root of repository
# Clean Install - dependencies without fixing lock files for same version
npm ci

# Start Next.js Application
npm run dev
```

## History

### Initiation

1. [Tailwind](https://tailwindcss.com/)

    > Tailwind CSS는 오픈 소스 CSS 프레임워크

    ```bash
    npm install -d tailwindcss postcss autoprefixer
    
    ## (-p를 붙이면 postcss.config.js파일까지 생성)
    npx tailwindcss init -p 
    ```

    ```javascript
    /** @type {import('tailwindcss').Config} */

    module.exports = {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

2. [PostCSS](https://postcss.org/)

    > PostCSS는 일상적인 CSS 동작을 자동화하기 위해 자바스크립트 기반 플러그인을 사용하는 소프트웨어 개발 도구

3. [Autoprefixer](https://github.com/postcss/autoprefixer)

    > 마크업 할 때 일부 브라우저에서 적용되지 않는 css 속성의 앞에 -mz-, -webkit- 등의 접두사를 자동으로 접두사를 붙여준다는 확장프로그램
4. [Prisma](https://www.prisma.io/)
    > Node.js와 Typescript ORM(Object Realtional Mapping)로 Javascript나 Typescript 와 database 를 SQL 코드를 쓰지 않고 연결해주는 라이브러리

    ```bash
    # Install Prisma
    npm install prisma --save-dev

    # set up Prisma with the init command of the Prisma CLI
    npx prisma init
    ```
