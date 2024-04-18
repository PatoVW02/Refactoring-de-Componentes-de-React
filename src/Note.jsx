import PropTypes from 'prop-types';

const Note = ({ noteId, noteContent }) => {
    return (
        <li id={noteId} style={{
            padding: "10px",
            border: "1px solid lightblue",
            borderRadius: "5px",
            marginBottom: "5px",
            listStyle: "none",
            width: "30%",
            textAlign: "center"
        }}>{noteContent}</li>
    );
};

Note.propTypes = {
    noteId: PropTypes.string.isRequired,
    noteContent: PropTypes.string.isRequired,
};

export default Note;
