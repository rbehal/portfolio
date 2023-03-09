import primeAIDGif from '../assets/Projects/primeAID.gif';
import jobSearchGif from '../assets/Projects/jobSearch.gif';
import amazingBrickGif from '../assets/Projects/amazingBrick.gif';
import optionsGif from '../assets/Projects/optionsStrategies.gif';
import tickerPickerGif from '../assets/Projects/tickerPicker.gif';


const tetrisAI = {
    title: 'Tetris.AI',
    description: 'A genetic algorithm to play and master a Tetris clone. tetris.ai uses a single layer perceptron model to judge the quality of a given move.\
The genetic algorithm begins by randomly initializing a generation of 50 weights. The genomes play games 1 by 1 consecutively, learning from their\
mistakes and evolving through every generation.',
    image: 'https://media.giphy.com/media/QXPWff3shCkTgh6DKM/giphy.gif',
    link: 'https://github.com/rbehal/tetris.ai',
}

const primeAID = {
    title: 'primeAID',
    description: 'primeAID is medical software that intends to streamline communication and information among medical facilities. It also aims to elevate the convenience\
of the patient and administrative experience. Patients will be able to access critical information through our web application. This information includes\
viewing current patient wait times, nearby medical facilities, and preliminary triage services.',
    image: primeAIDGif,
    link: 'https://devpost.com/software/primeaid',
}

const jobSearch = {
    title: 'jobSearch',
    description: 'I became extremely tired of the job search process. Particularly, I hated that I had to go to a bunch of different websites, set my search settings repeatedly,\
and see the same jobs over and over again. The worst was going through 10 clicks (filled with ads) just to find a link to apply to the job. As a result, I made\
a program that solves all of these issues.',
    image: jobSearchGif,
    link: 'https://github.com/rbehal/jobSearch',
}

const options = {
    title: 'Options Trading Strategy Modelling',
    description: 'A Jupyter Notebook used to test various options trading strategies. Some of the strategies available to model include: Bull Call Spreads, Long Straddles, Iron Condors, and Covered Calls.\
Originally intended for use in the TMX Options Trading Competition.',
    image: optionsGif,
    link: 'https://github.com/rbehal/options-trading-strategies/',
}

const tickerPicker = {
    title: 'Ticker Picker',
    description: 'This application retrieves the 500 stocks tracked by the S&P500 index and runs them through a variety of indicators in order to perform a technical overview. The final\
result is the ability to view the highest rated stocks to buy or sell and subsequently view their individual indicator ratings, in order to make a decision.',
    image: tickerPickerGif,
    link: 'https://github.com/rbehal/ticker_picker',
}

const amazingBrickAI = {
    title: 'Amazing Brick Neuroevolution',
    description: 'A recreation of the (originally) iOS game Amazing Brick in Javascript using the p5 framework. TensorFlow.js was used to develop a neuroevolutionary algorithm\
whose goal is to master the game. The neural networks use several parameters for its fitness function. These include time alive, time spent in the middle, and score.',
    image: amazingBrickGif,
    link: 'https://github.com/rbehal/amazingbrick-neuroevolution',
}

export const projects = [tetrisAI, primeAID, jobSearch, options, tickerPicker, amazingBrickAI];