import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  const [title, setTitle] = useState(`${val} is selected`);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {`${title}`}
        {val ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
              setTitle('No goods selected');
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
              className={classNames({
                'has-background-success-light': val === good,
              })}
            >
              <td>
                {val === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className={classNames('button', {
                      'is-info': val === good,
                    })}
                    onClick={() => {
                      setGood('');
                      setTitle('No goods selected');
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={classNames('button', {
                      'is-info': val === good,
                    })}
                    onClick={() => {
                      setGood(good);
                      setTitle(`${good} is selected`);
                    }}
                  >
                    +
                  </button>
                )}
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
