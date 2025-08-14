using UnityEngine;

public class PlayerAttack : MonoBehaviour
{
    [SerializeField] private GameObject player;
    
    //Variáveis para controlar o tempo entre ataques
    [SerializeField] private float timeBtwAttacks;
    [SerializeField] private float startTimeBtwAttacks;
    
    //Variáveis para controlar a direção do ataque
    [SerializeField] private string attackDirection;
    
    //Variáveis para controlar o alcance do ataque horizontal
    [SerializeField] private Transform HorizontalAttackPoint;
    [SerializeField] private float HorizontalAttackRangeX;
    [SerializeField] private float HorizontalAttackRangeY;
    
    //Variáveis para controlar o alcance do ataque para cima
    [SerializeField] private Transform UpAttackPoint;
    [SerializeField] private float UpAttackRangeX;
    [SerializeField] private float UpAttackRangeY;
    
    //Variáveis para controlar o alcance do ataque para baixo
    [SerializeField] private Transform DownAttackPoint;
    [SerializeField] private float DownAttackRangeX;
    [SerializeField] private float DownAttackRangeY;
    public LayerMask enemiesLayer;
    
    //Variáveis para o knockback do player
    [SerializeField] private float knockPlayerBackForce;
    [SerializeField] private float pogoForce;
    
    //Array para armazenar os inimigos atingidos
    private Collider2D[] hitEnemies;
    
    //Rigidbody do player
    private Rigidbody2D rb;
    
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {

    }
    
    // Update is called once per frame
    void Update()
    {
        CheckDirections();
        
        //Lógica para controlar o tempo entre ataques
        if(timeBtwAttacks <= 0)
        {
            if(Input.GetMouseButtonDown(0))
            {
                Attack();
                timeBtwAttacks = startTimeBtwAttacks;
            } 
        }
        else
        {
            timeBtwAttacks -= Time.deltaTime;
        }
    }
    
    void CheckDirections()
    {
        if (Input.GetKey(KeyCode.W))
        {
            attackDirection = "up";
        }
        else if (Input.GetKey(KeyCode.S))
        {
            attackDirection = "down";
        }
        else
        {
            attackDirection = "horizontal";
        }
    }
    
    void Attack()
    {
        if(attackDirection == "horizontal")
        {
            hitEnemies = Physics2D.OverlapBoxAll(HorizontalAttackPoint.position, new Vector2(HorizontalAttackRangeX, HorizontalAttackRangeY), 0, enemiesLayer);
            foreach (Collider2D enemy in hitEnemies)
            {
                enemy.GetComponent<Enemy>().TakeDamage(1);
            }
        }
        else if(attackDirection == "up")
        {
            hitEnemies = Physics2D.OverlapBoxAll(UpAttackPoint.position, new Vector2(UpAttackRangeX, UpAttackRangeY), 0, enemiesLayer);
            foreach (Collider2D enemy in hitEnemies)
            {
                enemy.GetComponent<Enemy>().TakeDamage(1);
            }
        }
        else if(attackDirection == "down")
        {
            hitEnemies = Physics2D.OverlapBoxAll(DownAttackPoint.position, new Vector2(DownAttackRangeX, DownAttackRangeY), 0, enemiesLayer);
            foreach (Collider2D enemy in hitEnemies)
            {
                enemy.GetComponent<Enemy>().TakeDamage(1);
            }
        }
    }
    
    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(HorizontalAttackPoint.position, new Vector3(HorizontalAttackRangeX, HorizontalAttackRangeY, 10));
        
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(UpAttackPoint.position, new Vector3(UpAttackRangeX, UpAttackRangeY, 1));
        
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(DownAttackPoint.position, new Vector3(DownAttackRangeX, DownAttackRangeY, 1));
    }
}
