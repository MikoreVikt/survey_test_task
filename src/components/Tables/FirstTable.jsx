import { TD } from '../SurveysResults/SurveysResults.styled';
import { useSelector } from 'react-redux';
import { selectResIsLoading } from 'redux/adminRedux/selectors';
import { selectFirstResult } from 'redux/adminRedux/selectors';

export const FirstTable = () => {
  const resIsLoading = useSelector(selectResIsLoading);
  const result = useSelector(selectFirstResult);

  let answers = [];
  answers =
    resIsLoading === false ? (answers = result.answers) : (answers = []);
  let names = [];
  names = resIsLoading === false ? (names = result.username) : (names = []);

  const handleHelper = () => {
    let mappedAnswers =
      answers !== undefined
        ? answers.map(arr => {
            return arr.map(({ owner, fullName, education, courses }) => {
              let name = names.find(obj => obj._id === owner);

              if (name === undefined) {
                name = 'GUEST';
              } else {
                name = name.username;
              }

              return { name, owner, fullName, education, courses };
            });
          })
        : [
            [
              {
                name: 'Name',
                owner: 'Owner',
                fullName: 'FullName',
                education: 'Education',
                courses: 'Courses',
              },
            ],
          ];

    return mappedAnswers;
  };

  return (
    <>
      {handleHelper().map(arr =>
        arr.map(({ name, owner, fullName, education, courses }) => {
          return (
            <tr key={owner}>
              <TD>{name}</TD>
              <TD>{fullName}</TD>
              <TD>{education}</TD>
              <TD>{courses}</TD>
            </tr>
          );
        })
      )}
    </>
  );
};
