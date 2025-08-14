using UnityEngine;
using System.Collections.Generic;

public class Skeleton : Enemy
{
    [SerializeField] private bool canMove = true;

    [SerializeField] private float speed;
    [SerializeField] private List<Transform> followPoints;
    [SerializeField] private Transform currentFollowPoint;
    [SerializeField] private int pointIndex;

    [SerializeField] private bool isScanningPlayer;
    [SerializeField] private float scanWidth;
    [SerializeField] private float scanHeight;
    [SerializeField] private LayerMask playerLayer;

    [SerializeField] private float stopMovingCooldown;
    [SerializeField] private float stopMovingTimer;

    [SerializeField] private Transform attackPoint;
    [SerializeField] private float attackRangeX;
    [SerializeField] private float attackRangeY;
    [SerializeField] private bool isAttackSuccesful;

    private Rigidbody2D rb;
    private BoxCollider2D boxColl;

    [SerializeField] private GameObject player;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        boxColl = GetComponent<BoxCollider2D>();
    }

    // Update is called once per frame
    void Update()
    {
        ChangeFollowPoint();
        ScanPlayer();
    }

    void FixedUpdate()
    {
        if(!canMove)
            return;
        Move();
    }

    public void Move()
    {
        if(currentFollowPoint.position.x > transform.position.x)
        {
            rb.linearVelocity = new Vector2(speed, rb.linearVelocity.y);
            transform.eulerAngles = new Vector3(0, 0, 0);
        }
        else if(currentFollowPoint.position.x < transform.position.x)
        {
            rb.linearVelocity = new Vector2(-speed, rb.linearVelocity.y);
            transform.eulerAngles = new Vector3(0, 180, 0);
        }

        if(currentFollowPoint.position.y > transform.position.y)
        {
            rb.linearVelocity = new Vector2(rb.linearVelocity.x, speed);
        }
        else if(currentFollowPoint.position.y < transform.position.y)
        {
            rb.linearVelocity = new Vector2(rb.linearVelocity.x, -speed);
        }
    }

    public void ChangeFollowPoint()
    {
        if(boxColl.IsTouching(currentFollowPoint.GetComponent<Collider2D>()))
        {
            pointIndex++;
            if(pointIndex >= followPoints.Count)
            {
                pointIndex = 0;
            }
            currentFollowPoint = followPoints[pointIndex];
        }
    }

    public void ScanPlayer()
    {
        isScanningPlayer = Physics2D.OverlapBox(transform.position, new Vector2(scanWidth, scanHeight), 0, playerLayer);

        if(isScanningPlayer)
        {
            stopMovingTimer += Time.deltaTime;
            if(stopMovingTimer < stopMovingCooldown)
            {
                canMove = false;
                rb.linearVelocity = Vector2.zero;
                if (transform.position.x < player.transform.position.x)
                    transform.eulerAngles = new Vector3(0, 0, 0);
                else if (transform.position.x > player.transform.position.x)
                    transform.eulerAngles = new Vector3(0, 180, 0);
                AttackPlayer();
            }
            else
            {
                stopMovingTimer = 0f;
            }
        }
        else
        {
            stopMovingTimer = 0f;
            canMove = true;
        }
    }

    void OnDrawGizmos()
    {
        Gizmos.color = Color.blue;
        Gizmos.DrawWireCube(transform.position, new Vector2(scanWidth, scanHeight));

        Gizmos.color = Color.green;
        Gizmos.DrawWireCube(attackPoint.position, new Vector2(attackRangeX, attackRangeY));
    }

    public void AttackPlayer()
    {
        float attackDelay = 1f;
        float attackTimer = 0f;

        if (attackTimer < attackDelay)
        {
            isAttackSuccesful = Physics2D.OverlapBox(attackPoint.position, new Vector2(attackRangeX, attackRangeY), 0, playerLayer);
            attackTimer += Time.deltaTime;
            if(isAttackSuccesful)
                Debug.Log("Attack successful!");
        }
        else
        {
            attackTimer = 0f;
            canMove = true;
        }
    }
}
