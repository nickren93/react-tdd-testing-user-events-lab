import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);
  const name = screen.getByPlaceholderText(/name/i)
  const emailAddress = screen.getByPlaceholderText(/email address/i)
  expect(name).toBeInTheDocument();
  expect(emailAddress).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);
  const sports = screen.getByRole("checkbox", { name: /sports/i });
  const musics = screen.getByRole("checkbox", { name: /music/i });
  const movies = screen.getByRole("checkbox", { name: /movies/i });
  expect(sports).toBeInTheDocument();
  expect(musics).toBeInTheDocument();
  expect(movies).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);
  const sports = screen.getByRole("checkbox", { name: /sports/i });
  const musics = screen.getByRole("checkbox", { name: /music/i });
  const movies = screen.getByRole("checkbox", { name: /movies/i });
  expect(sports).not.toBeChecked();
  expect(musics).not.toBeChecked();
  expect(movies).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);

  const name = screen.getByPlaceholderText(/name/i);
  userEvent.type(name, "Nick Ren");
  expect(name).toHaveValue("Nick Ren");
  
  const emailAddress = screen.getByPlaceholderText(/email address/i)
  userEvent.type(emailAddress, "pizzafan@email.com");
  expect(emailAddress).toHaveValue("pizzafan@email.com");
});


test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />);
  const sports = screen.getByRole("checkbox", { name: /sports/i });
  userEvent.click(sports);
  expect(sports).toBeChecked();
  userEvent.click(sports);
  expect(sports).not.toBeChecked();

  const musics = screen.getByRole("checkbox", { name: /music/i });
  userEvent.click(musics);
  expect(musics).toBeChecked();
  userEvent.click(musics);
  expect(musics).not.toBeChecked();

  const movies = screen.getByRole("checkbox", { name: /movies/i });
  userEvent.click(movies);
  expect(movies).toBeChecked();
  userEvent.click(movies);
  expect(movies).not.toBeChecked();
});


test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />);
  const submit = screen.getByRole("button", { name: /signup to newsletter!/i });
  expect(submit).toBeInTheDocument()
  userEvent.click(submit)
  expect(screen.getByText(/Thanks for suscribing!/i)).toBeInTheDocument();
});
