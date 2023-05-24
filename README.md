# CovidScope - Covid19 Forecaster

This project was meant to aid researchers and the panamanian community as a Covid19 Forecasting Showcase website by providing monitoring and forecasting capabilites of infected curves for Covid19 statistics and possible pandemic stages. It was an altruistic initiative aimed at providing valuable insights into the progression of the pandemic.

## About the Project

The forecasting showcase website utilizes public data from various sources such as the World Health Organization `WHO`, National Health Commission `NHC`, and other public databases. The data is used to perform logistic regression over an `SIR`Model, an Ordinart Differential Equation`ODE` model widely used for epidemic modeling.

## Website

The website is hosted using `Netlify` and `GitHub`, making use of their seamless deployment capabilities. It serves as a platform to visualize and analyze the Covid19 statistics and forecasts. The website features:

- Data Sources: Public data from `WHO`, `NHC`, and other reliable databases are used to provide accurate and up-to-date information.

- Visualization: `Chart.js`, a powerful visualization library, is used to present the infected curves and forecasted stages in an interactive and user-friendly manner.

- Interactive Information: `Infogram` services are integrated to provide additional interactive information, enhancing the understanding of the Covid19 statistics and forecasts.

- Support: A "Buy Me a Coffee" button is available on the website to receive support and encourage further development and updates of the forecasting showcase.

## Technology Stack and Workflow

The implementation of the forecasting showcase involves the following technologies and workflow:

- Front-end Development: ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- Visualization Library: ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
- Hosting and Version Control: ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
- Data Retrieval and Processing: `MATLAB`, ![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)![Windows Terminal](https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white)
- Deployment Automation: `Windows Task Scheduler` (automated running of the bash script)
- Support: ![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)

The system runs a bash script that calls a `MATLAB` script, which in turn interacts with various services including some Python services that were later on deprecated. The `MATLAB` script performs logistic regression over the `SIR` Model and pushes the output data and relevant information to `GitHub` for website updates. It also includes routines to handle parameter iteration and handle cases where the model cannot be fitted.

## Project Status and Future Objectives

The project is currently stopped and outdated, with February 2022 being the last month where data was shown. There were various reasons for the project's discontinuation, including time consumption and low community support. However, the forecasting showcase proved to be a valuable tool for [thesis projects](https://ieeexplore.ieee.org/document/10040829) at the [Universidad Tecnológica de Panamá](https://utp.ac.pa/), the leading technological university in the country, and it even got to receive funding from the university at one point.

Future objectives for the forecasting showcase website included:

- Adding capabilities to analyze and forecast information for other countries, expanding beyond Panama.
- Updating the website with the latest data and improving the automation process for seamless updates.

Although the project is currently inactive, it has made significant contributions to the academic community and demonstrated the potential for data-driven forecasting and analysis in managing the Covid19 pandemic.

Thank you for visiting the CovidScope Showcase website!

###### A94
