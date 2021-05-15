const numbers = ['1', '2', '3', '4', '5', '6', '7',
                '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suits = [
  {
    icon: '♥',
    color: 'red'
  },  {
    icon: '♠',
    color: 'black'
  },  {
    icon: '♣',
    color: 'red'
  },  {
    icon: '♦',
    color: 'black'
  },
];

const container = document.getElementById
('container');

function CreateCard(number, suit) {
  <div class="card">
    <span class="number top">
      A
    </span>
    <p class="suit">
      ♥️
    </p>
    <span class="number bottom">
      A
    </span>
  </div>
}
