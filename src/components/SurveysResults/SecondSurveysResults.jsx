import { TableWrapper, TABLE, TH } from './SurveysResults.styled';
import { useSelector } from 'react-redux';
import { selectResIsLoading } from 'redux/adminRedux/selectors';
import { Loader } from 'components/Loader/Loader';
import { SecondTable } from 'components/Tables/SecondTable';

const SecondSurveysResults = () => {
  const resIsLoading = useSelector(selectResIsLoading);

  return resIsLoading ? (
    <Loader />
  ) : (
    <TableWrapper>
      <TABLE>
        <thead>
          <tr>
            <TH>Username</TH>
            <TH>Position</TH>
            <TH>Stack</TH>
            <TH>Salary</TH>
          </tr>
        </thead>
        <tbody>
          <SecondTable />
        </tbody>
      </TABLE>
    </TableWrapper>
  );
};

export default SecondSurveysResults;
