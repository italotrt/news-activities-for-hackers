# Overview
This is a redesigned implementation of [Hacker News](https://news.ycombinator.com/) as a modern web application.

You can visualise the deployed version of the project at https://italotrt.github.io/news-activities-for-hackers/

The current stage of this web application offers:

- Redesign of the front page
- The user is able to choose between new and top posts
- The posts are shown as a list
- Pagination after hitting a certain amount of posts in the page

### TechStack

The tech stack of this project is using a React + Typescript + Vite framework, MUI materials for the components, TanStack Query to handle the API calls in order to populate the components.

## How to run

After cloning the repo, the application can be run by using the command below, this will make it accessible at the localhost:5173 on your web browser.

```
  npm run dev
```

## Architecture

### Data Source
   - [Hacker News API](https://news.ycombinator.com/): The project uses the API available from the original website.

### Components
   - The components and icons used in the page are from [MUI Materials](https://mui.com/) library that served as a base.
  
### Workflow Automation
   - GitHub Actions + Pages: In order to deploy the application and make it publicly available, the repo uses an automation script everytime new changes are made to the main brench and host it on GitHub Pages.

## Testing

Run `npm test` in order to run the existing test cases.

The current test cases only feature Integration test for the components rendered on the main page.

## Assumptions

1. Use of external libraries.
    - I assumed that in a workplace I'd have components available to me to be used throughout the web application, in order to keep a standard. I used components available from the MUI Materials library.
  
2. Default posts displayed.
   - By examining the hacker news website I assumed that the default request was the top stories.

The assumptions make throughtout the development can be seen in the [Pull Requests](https://github.com/italotrt/news-activities-for-hackers/pulls?q=is:pr+is:closed) for each feature implementation.

## Screenshots

<img width="2370" height="1326" alt="Screenshot 2026-01-23 at 16 34 25" src="https://github.com/user-attachments/assets/9aeae12c-f108-4ae4-9762-a7206eb59de4" />

Pagination:
<img width="2436" height="1434" alt="image" src="https://github.com/user-attachments/assets/1e16aae0-250d-4c9a-8b3f-3749e01296df" />
<img width="2462" height="1452" alt="image" src="https://github.com/user-attachments/assets/e0f12e73-d704-4260-a7d6-6479b5802628" />

Testing:
<img width="466" height="308" alt="image" src="https://github.com/user-attachments/assets/7f9dafea-a17f-45e4-abc6-8f406c37fff8" />

