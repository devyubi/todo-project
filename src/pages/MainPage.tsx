// import StatsPie from '../components/StatsPie';
// import { TodoType } from '../context/todo/todoTypes';
// import { filterThisWeek, getCompletionRate } from '../utils/stats';

// interface MainPageProps {
//   todos: TodoType[];
// }

// const MainPage: React.FC<MainPageProps> = ({ todos }) => {
//   const weekTodos = filterThisWeek(todos);
//   const completionRate = getCompletionRate(weekTodos);
//   const notCompleted = weekTodos.length - (completionRate / 100) * weekTodos.length;

//   return (
//     <div className="p-6 bg-[#F5EFE7] dark:bg-[#3C3735] text-[#5A4B41] dark:text-[#EDE4DC] rounded-xl shadow-md mb-4">
//       <h2 className="text-lg font-semibold mb-4">이번 주 완료율</h2>
//       <StatsPie completed={(completionRate / 100) * weekTodos.length} notCompleted={notCompleted} />
//     </div>
//   );
// };

// export default MainPage;
