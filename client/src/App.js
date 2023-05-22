import './App.css';
import GameContainer from './components/GameContainer/gamecontainer';

function App() {
  return (
    <div className="App">
      <GameContainer></GameContainer>
      <div className='footer'>
      <img alt="leaf" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"/>
          Not Carbon neutral since 2007
      </div>
    </div>
  );
}

export default App;
