import { TD } from '../SurveysResults/SurveysResults.styled';
import { useSelector } from 'react-redux';
import { selectResIsLoading } from 'redux/adminRedux/selectors';
import { selectSecondResult } from 'redux/adminRedux/selectors';

export const SecondTable = () => {
  const resIsLoading = useSelector(selectResIsLoading);
  const result = useSelector(selectSecondResult);

  let answers = [];
  answers =
    resIsLoading === false ? (answers = result.answers) : (answers = []);
  let names = [];
  names = resIsLoading === false ? (names = result.username) : (names = []);

  const handleHelper = () => {
    let mappedAnswers =
      answers !== undefined
        ? answers.map(arr => {
            return arr.map(({ owner, position, stack, salary }) => {
              let name = names.find(obj => obj._id === owner);

              if (name === undefined) {
                name = 'GUEST';
              } else {
                name = name.username;
              }

              return { name, owner, position, stack, salary };
            });
          })
        : [
            [
              {
                name: 'Name',
                owner: 'Owner',
                position: 'Position',
                stack: 'Stack',
                salary: 'Salary',
              },
            ],
          ];

    return mappedAnswers;
  };

  return (
    <>
      {handleHelper().map(arr =>
        arr.map(({ name, owner, position, stack, salary }) => {
          return (
            <tr key={owner}>
              <TD>{name}</TD>
              <TD>{position}</TD>
              <TD>{stack}</TD>
              <TD>{salary}</TD>
            </tr>
          );
        })
      )}
    </>
  );
};
