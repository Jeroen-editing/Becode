<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Ticket
 *
 * @ORM\Table(name="ticket", indexes={@ORM\Index(name="ticket_user_id_fk", columns={"customer_id"})})
 * @ORM\Entity
 */
class Ticket
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=255, nullable=false)
     */
    private $status;

    /**
     * @var string
     *
     * @ORM\Column(name="public_comment", type="string", length=255, nullable=false)
     */
    private $publicComment;

    /**
     * @var string|null
     *
     * @ORM\Column(name="private_comment", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $privateComment = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="assigned_agent", type="string", length=255, nullable=true, options={"default"="NULL"})
     */
    private $assignedAgent = 'NULL';

    /**
     * @var bool|null
     *
     * @ORM\Column(name="escalation", type="boolean", nullable=true)
     */
    private $escalation = '0';

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="customer_id", referencedColumnName="id")
     * })
     */
    private $customer;


}
