export default interface BoardListItem {
  boardNumber: number;
  idol: string;
  type: string;
  name: string;
  boardImageList: string | null;
  title: string;
  content: string;
  price: number;
  chatCount: number;
  favoriteCount: number;
  sold: boolean;
  writeDatetime: string;
  writerEmail: string;
  writerNickname: string;
  writerProfileImage: string | null;
}
