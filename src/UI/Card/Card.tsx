import { useState, useEffect } from "react";
import "./Card.scss";
import ArrowUpIcon from "../../assets/up.png";
import ArrowDownIcon from "../../assets/down.png";

interface CardProps {
  title: string;
  value: string | number;
  percentage: number;
  percentageStatus: boolean;
}

const Card = ({ title, value, percentage, percentageStatus }: CardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const isPositive = percentage >= 0;
  const formattedPercentage = Math.abs(percentage).toFixed(2);

  useEffect(() => {
    if (typeof value === "number") {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;
      const isDecimal = value % 1 !== 0;
      const decimalPlaces = isDecimal
        ? value.toString().split(".")[1]?.length || 2
        : 0;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        let currentValue = startValue + (endValue - startValue) * easeOut;

        // Round to appropriate decimal places
        if (isDecimal) {
          currentValue = Number(currentValue.toFixed(decimalPlaces));
        } else {
          currentValue = Math.floor(currentValue);
        }

        setAnimatedValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedValue(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [value]);

  const formattedValue =
    typeof value === "number"
      ? percentageStatus
        ? animatedValue.toFixed(2)
        : animatedValue.toLocaleString()
      : value;

  return (
    <div className="card bg-card-background">
      <h3 className="card__title">{title}</h3>

      <div className="card__value text-2xl">
        {formattedValue} {percentageStatus ? "%" : ""}
      </div>
      {/* <div className="card__separator"></div> */}
      <div
        className={`card__change ${
          isPositive ? "card__change--positive" : "card__change--negative"
        } `}
      >
        <span className="card__change-icon">
          {isPositive ? (
            <img
              src={ArrowUpIcon}
              alt="Arrow Up"
              className="card__change-icon-image"
            />
          ) : (
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              className="card__change-icon-image"
            />
          )}
        </span>
        <span className="card__change-text">
          {isPositive ? "+" : "-"}
          {formattedPercentage}%
        </span>
      </div>
    </div>
  );
};

export default Card;
