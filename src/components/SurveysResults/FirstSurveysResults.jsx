import { TableWrapper, TABLE, TH } from './SurveysResults.styled';
import { useSelector } from 'react-redux';
import { selectResIsLoading } from 'redux/adminRedux/selectors';
import { Loader } from 'components/Loader/Loader';
import { FirstTable } from 'components/Tables/FirstTable';

const FirstSurveysResults = () => {
  const resIsLoading = useSelector(selectResIsLoading);

  return resIsLoading ? (
    <Loader />
  ) : (
    <TableWrapper>
      <TABLE>
        <thead>
          <tr>
            <TH>Username</TH>
            <TH>Full name</TH>
            <TH>
              Education
              <br />
              (Yes/No)
            </TH>
            <TH>
              Courses
              <br />
              (Yes/No)
            </TH>
          </tr>
        </thead>
        <tbody>
          <FirstTable />
        </tbody>
      </TABLE>
    </TableWrapper>
  );
};

export default FirstSurveysResults;
