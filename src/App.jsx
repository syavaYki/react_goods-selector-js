import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [val, setGood] = useState(goods[8]);

  function btClickHandler(e) {
    if (e.target.value === val) {
      setGood('');
    } else {
      setGood(e.target.value);
    }
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {val ? `${val} is selected` : 'No goods selected'}
        {val ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
            }}
          />
        ) : (
          ''
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': val === good,
              })}
            >
              <td>
                <button
                  data-cy={cn({
                    AddButton: val !== good,
                    RemoveButton: val === good,
                  })}
                  type="button"
                  className={cn('button', {
                    'is-info': val === good,
                  })}
                  onClick={btClickHandler}
                  value={good}
                >
                  {val === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
