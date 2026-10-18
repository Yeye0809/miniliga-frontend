import "./FormActions.css";

interface Props{
  onClose: ()=> void;

}

export const FormActions = ({onClose} : Props) => {
  return (
    <div className="form-actions-bar">
      <button 
        type="button" 
        className="form-actions-button form-actions-button--cancel"
         onClick={onClose}
      >
        Cancelar
      </button>
      <button 
        type="submit" 
        className="form-actions-button form-actions-button--save"
       
      >
        Guardar
      </button>
    </div>
  );
}

