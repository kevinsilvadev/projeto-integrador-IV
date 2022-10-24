import './Insights.css'
const Insights = ({ icon, title, value, percentage, type }) => {
  return (
    <div className='insights'>
        <div className={type}>
             <span>{icon}</span>
             <div className="middle">
                <div className="left">
                    <h3 className='insights-title'>{title}</h3>
                    <h1>R$ {value}</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number">
                        <p>{percentage}%</p>
                    </div>
                </div>
             </div>
             <small className='text-muted'>Last 24 Hours</small>
        </div>
    </div>
  )
}

export default Insights