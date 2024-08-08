import Parthners from '@/components/ui/Parthners/Parthners'
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA']

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Parthners parthners={partn} />
      <Main />
      <Footer />
    </>
  )
}

export default HomePage
