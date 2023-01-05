
import { NavBar, MedCardCollection, AddMedForm, UpdateMedForm } from './ui-components'

function App () {
  return (
    <>
      <NavBar width={'100%'} />
      <div className='center'>
        <div className='MedCollectionContainer'>
          <MedCardCollection />
        </div>
      </div>
      <div className='modal' style={{ display: 'none' }}>
        <AddMedForm />
      </div>
      <div className='modal' style={{ display: 'none' }}>
        <UpdateMedForm />
      </div>
    </>
  );
}

export default App;