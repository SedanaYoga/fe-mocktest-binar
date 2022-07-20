<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Sedana Yoga - Frontend Mock Test </h3>
  <img src="https://global-uploads.webflow.com/5e70b9a791ceb781b605048c/62c5720d8b3b6003c2f46fa4_logo-binar-academy.svg" alt="logo" height="100">
  <p align="center">
    A repository for completing Binar Career Development Program.

  </p>
</div>
<!-- ABOUT THE PROJECT -->

# About The Project

In this mock test, the task was pretty straight forward. We have to translate the backend (provided by Binar) into a frontend design and fully functional including cosuming the API of User (login and register) and Product (CRUD functionality). The site is fully up and running in this url https://mocktest-binar.vercel.app/

![Login][login]
![Register][register]
![Products][products]
![Create][create]
![Edit][edit]
![Delete][delete]
![Responsive][responsive]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Frontend Stack

- [Next JS](https://nextjs.org/)
- [SASS](https://sass-lang.com/)
- [CSS Module](https://github.com/css-modules/css-modules)
- [Axios](https://axios-http.com/docs/intro)

### Backend Stack

- [Provided by Binar](https://test-binar.herokuapp.com/)

### Development Tools:

- [Git](https://git-scm.com/)
- [Neovim](https://neovim.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

- `Integration NextJS with RESTful API` => in the past, I almost used Firebase for storing database and authentication, along with the CRUD method provided by Firestore. In this project, it's a bit different, I was using API documentation to connect with User Auth and Product CRUD which needs auth token to implement.
- `ESLint Config for Deployment` => I learn about how to mitigate issues in deployment in this case I'm using Vercel, since its connect smoothly with GitHub and NextJS.
- `Learn Best Practice of GitFlow` => Having 2 branches `dev` and `main` in github seems very convinient and more cleaner repository. And I connect them with Vercel which will treat `dev` as Preview Site and `main` as Production Site.
- `Mitigate CORS issue` => was getting CORS issues in PUT and DELETE method but I managed to get it solved by setting my next config, so it's good stuff to know, not aware of this possibility in the past.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## The Feature

- CRUD Functionality of Products.
- User Authentication with token
- Fully Responsive Site
- NextJS is implemented but only using CSR (Client Site Rendering)
- Global State is used in this project using React Context API

## Prerequisites

If you want to edit the code, you need to have `nodejs` and `NPM`.

Install all dependencies by this command if you already get node and npm installed in your system.

```sh
cd <repository-folder>
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

- Set your terminal directory to `repository folder`
- Start the Next Server by running this command
  ```sh
  npm run dev
  ```
- Open `localhost:3000` in your browser

<p align="right">(<a href="#top">back to top</a>)</p>

# Space for Improvement

- Cookies or Session implementation (if we refresh the page, it won't keep the token)
- Notification Implementation to increase interactivity when loading/error/warning

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Twitter - [@cok_yoga](https://twitter.com/Cok_Yoga)
LinkedIn - [Sedana Yoga](https://github.com/SedanaYoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[login]: docs/login.png
[register]: docs/register.png
[products]: docs/products.png
[create]: docs/create.png
[edit]: docs/edit.png
[delete]: docs/delete.png
[responsive]: docs/responsive.png
