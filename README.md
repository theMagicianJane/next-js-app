This is a test task project created with Next.JS, React, Tailwind, echarts-for-react, react-query. It visualizes available
data in charts to see changes in time.

## Getting Started
Steps to run the app:
1) npm i 
2) npm run build
3) npm run dev
4) Due to CORS restrictions you have to run the app in browser where CORS is disabled, run in the terminal:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
5) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app has two pages: Login, Chart.
## Login page

email: challenge2025@arbolitics.com
password: challenge2025@arbolitics.com

You can login using credentials and after successfull login you will be redirected to the Chart page

## Chart page

At the Chart page you can see visualizing of Humidity and Temperature for two devices in daily, weekly, monthly
periods of time. Using Calendar for picking a date you can see visualized data for a day, whole week from Mon to Sun,
and for whole month beginning from the first to the last day of the month.
