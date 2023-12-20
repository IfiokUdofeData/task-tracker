import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title, onAdd, showAdd}) => {

    return (
      <header className='header'>
        <h1>{title}</h1>
        <Button 
        // color=`${showAddTask ? 'green' : 'red'}` 
        // text=`${ showAddTask ? 'Add' : 'close'}`

        color= { showAdd ? 'red': 'green'}
        text= { showAdd ? 'Close': 'Add'}
        onAdd={onAdd}/>
      </header>
    );
  }
 
  
//   const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
//   }

  Header.defaultProps = {
    title: 'Task Tracker',
  }

  Header.propTypes = {
    title: PropTypes.string
  }

  export default Header;
  