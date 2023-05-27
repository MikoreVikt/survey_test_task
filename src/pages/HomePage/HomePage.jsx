import { HomeWrapper, HomeTitle, HomeSecondTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeTitle>Welcome to our survey!</HomeTitle>
      <HomeSecondTitle>
        To take the survey, you need to register and log in to your personal
        account. Next, you should go to the first part of the survey, and then
        to the second. Be careful, you can only take the survey once!
      </HomeSecondTitle>
    </HomeWrapper>
  );
};

export default HomePage;
