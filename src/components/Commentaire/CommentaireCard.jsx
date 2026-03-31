export default function CommentaireCard({ commentaires }) {
  return (
    <ul className="list-group">
      {commentaires.map((c) => (
        <li key={c.id_commentaire} className="list-group-item">
          <strong>Note :</strong> {c.note}/5
          <br />
          <strong>Commentaire :</strong> {c.commentaire}
          <br />
          <strong>Date :</strong> {c.date_commentaire}
        </li>
      ))}
    </ul>
  );
}
