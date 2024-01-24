import { useState } from 'react';

import './App.css';

const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'birthdate',
    name: 'birthdate',
    type: 'date',
    label: 'Birthdate',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'password'
  }
]

function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: ''
  });

  const [page, setPage] = useState(0);
  const isLastPage = page === fields.length - 1;
  const [showSuccess, setShowSuccess] = useState(false);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [fields[page].name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isLastPage) {
      setShowSuccess(true);
      alert(JSON.stringify(formValues));
    } else {
      setPage(page + 1);
    }
  }

  const goBack = () => {
    setPage(page - 1);
  }

  if(showSuccess) {
    return <div>is Success page</div>
  }

  return (
    <>
      {page > 0 && <button onClick={goBack} className='goBack'>{`< Back`}</button>}
      <form onSubmit={handleSubmit}>
        <label htmlFor={fields[page].name}>{fields[page].label}</label>
        <input
          id={fields[page].id}
          type={fields[page].type}
          name={fields[page].name}
          value={formValues[fields[page].name]}
          onChange={onChange}
        />
        <button disabled={!formValues[fields[page].name]} type='submit'>{isLastPage ? 'submit' : 'next'}</button>
      </form>
    </>
  );
}

export default App;
