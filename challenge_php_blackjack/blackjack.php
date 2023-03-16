<?php

class Blackjack
{

    private $cards = [];

    private const MIN_VALUE = 1;
    private const MAX_VALUE = 11;

    private const BLACKJACK = 21;
    private const DEALER_MAX = 16;

    private $score = 0;
    private $myTurn;


    public function hit(): void
    {

        if ($this->score && $this->myTurn < self::BLACKJACK) {
            $randomCard = rand(self::MIN_VALUE, self::MAX_VALUE);
            array_push($this->cards, $randomCard);
            $this->score += $randomCard;
        }

        if ($this->score > self::BLACKJACK) {
            $this->myTurn = false;
        } elseif ($this->score == self::BLACKJACK) {
            $this->myTurn = false;
        }

    }

    public function stand()
    {   /*
        if ($this->score < self::DEALER_MAX) {
            $this->hit();
        }
        */
        if ($this->myTurn) {
            $this->myTurn = false;
        }

    }

    public function surrender()
    {
        if ($this->myTurn) {
            $this->myTurn = false;
        }
    }

    public function __construct($score, $myTurn)
    {
        $this->score = $score;
        $this->myTurn = $myTurn;
    }

    public function getScore(): int
    {
        return $this->score;
    }

    public function setScore($score): void
    {
        $this->score = $score;
    }

    public function getMyTurn(): bool
    {
        return $this->myTurn;
    }

    public function setMyTurn($myTurn): void
    {
        $this->myTurn = $myTurn;
    }

}
