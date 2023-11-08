export default function PersonDetailsComponent({ name, mbti }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{JSON.stringify(mbti)}</h1>
    </div>
  );
}
