import { connect } from 'react-redux';

import { RootState } from '../store';
import FormPlacework from '../components/FormPlacework';
import { selectEventPiecesworks } from '../entities/Event/selectors';
import { openModal } from '../store/featurs/modalSlice';
import { MODAL_FORMS } from '../entities/Modal/constants';
import { deletePiecework } from '../services/event';

const mapState = (state: RootState, { date }: { date: string }) => ({
  pieceworks: selectEventPiecesworks(state, date),
});

const mapDispatch = {
  openModal: () => openModal(MODAL_FORMS.ADD_ITEM_FORM),
  deleteItem: (eventId: string, pieceworkId: string) =>
    deletePiecework({ eventId, pieceworkId }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormPlacework);
