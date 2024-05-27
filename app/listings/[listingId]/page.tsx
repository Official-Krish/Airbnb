import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import {EmptyState} from '@/app/components/EmptyState';
import ListingClient from './listingClient';
import getReservations from '@/app/actions/getReservation';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />;
};

export default ListingPage;