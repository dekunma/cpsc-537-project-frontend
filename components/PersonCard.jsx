import Skeleton from "react-loading-skeleton";

export default function PersonCard({ title, subTitle, onClick }) {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="card w-96 bg-base-100 transition-all duration-300 shadow-xl hover:drop-shadow-2xl">
        <div className="card-body items-center text-center">
          {title ? (
            <h2 className="card-title">{title}</h2>
          ) : (
            <Skeleton width={100} />
          )}

          <p className="w-full">
            {subTitle || <Skeleton containerClassName="flex-1" count={2} />}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary tooltip tooltip-bottom w-24"
              data-tip="Guess MBTI"
            >
              {title ? "Guess" : <Skeleton containerClassName="flex-1" />}
            </button>
            <button
              className="btn btn-ghost tooltip tooltip-bottom w-24"
              data-tip="Show Answer"
            >
              {title ? "Answer" : <Skeleton containerClassName="flex-1" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
