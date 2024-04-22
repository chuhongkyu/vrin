import Header from 'components/common/Header';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Header/>
      <h1>{ t("main.section01.text1")}</h1>
    </div>
  );
}

export default App;
