import Modal from 'components/Modal';
import ScrollToTop from 'components/ScrollToTop';
import Header from 'components/common/Header';
import ScrollContainer from 'components/home/ScrollContainer';
import SliderView from 'components/home/SliderView';
import { useEffect } from 'react';
import { lockScroll, unlockScroll } from 'utils/helper';
import { useFullScreen } from 'utils/useFullScreen';

function App() {
  const { state, dispatch } = useFullScreen()
  const { modal, viewMode } = state

  useEffect(()=>{
    if(viewMode || modal){
      lockScroll()
    }else{
      unlockScroll()
    }
  },[viewMode, modal])

  useEffect(()=>{
    dispatch({ type: "CHECK_TODAY_MODAL" })
    dispatch({ type: "HANDLE_HEADER", payload : "NORMAL"})
  },[dispatch])

  return (
    <>
      <ScrollToTop/>
      <Header/>
      <ScrollContainer/>
      {viewMode && <SliderView />}
      {modal && <Modal/>}
    </>
  );
}

export default App;
