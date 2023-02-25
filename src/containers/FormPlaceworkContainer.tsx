import { connect } from 'react-redux';

import { RootState } from '../store';
import FormPlacework from '../components/FormPlacework';
import { selectEventPiecesWork } from '../entities/Event/selectors';
import { openModal } from '../store/featurs/modalSlice';
import { deleteEvent } from '../store/featurs/eventSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';

const mapState = (state: RootState, { date }: { date: string }) => ({
  piecesWork: selectEventPiecesWork(state, date),
});

const mapDispatch = {
  openModal: () => openModal(MODAL_FORMS.ADD_ITEM_FORM),
  deleteItem: (date: string, key: string) => deleteEvent({ date, key }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormPlacework);
