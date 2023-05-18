import {Task} from "../types/Model";

export function dataRowMock(): string[] {
    return ["Todo","Doing", "Done"]
}
export function dataTaskMock(): Task[] {
    return [
        {
            id: 1,
            rowId: "Todo",
            title: "Create User Registration Form",
            description: "Develop a user registration form with validation and data persistence.",
            star: false
        },
        {
            id: 2,
            rowId: "Todo",
            title: "Implement User Authentication",
            description: "Set up user authentication using JWT tokens and secure login functionality.",
            star: true
        },
        {
            id: 3,
            rowId: "Todo",
            title: "Design Landing Page",
            description: "Create an eye-catching landing page design that promotes the product/service.",
            star: false
        },
        {
            id: 4,
            rowId: "Doing",
            title: "Build RESTful API",
            description: "Develop a backend API using Node.js and Express for handling CRUD operations.",
            star: false
        },
        {
            id: 5,
            rowId: "Doing",
            title: "Optimize Database Queries",
            description: "Identify and optimize slow-performing database queries for improved application performance.",
            star: false
        },
        {
            id: 6,
            rowId: "Doing",
            title: "Cooking Some Paella",
            description: "Cooking Paella",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Oven-paella-5d16b06.jpg?quality=90&webp=true&resize=375,341",
            star: false
        },
        {
            id: 7,
            rowId: "Done",
            title: "Write Unit Tests",
            description: "Create unit tests using a testing framework to ensure code reliability and correctness.",
            star: false
        },
        {
            id: 8,
            rowId: "Done",
            title: "Deploy Application to Production",
            description: "Prepare the application for deployment and publish it to a production environment.",
            star: false
        },
        {
            id: 9,
            rowId: "Done",
            title: "Conduct User Acceptance Testing",
            description: "Engage users to test the application and gather feedback for further improvements.",
            star: false
        },
    ];
}
